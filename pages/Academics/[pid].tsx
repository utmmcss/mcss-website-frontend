import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Image from 'next/image';
import _ from 'underscore';

import { useAppSelector, useAppDispatch } from '@store/hooks';
import { getAllAcademics } from '@store/academicsSlice';
import { HashLoader } from 'react-spinners';
import { formatDate } from '@utils/helper';
import MaterialCard from '@components/Common/MaterialCard';
import Tag from '@components/Common/Tag';
import MarkdownDisplay from '@components/Common/MarkdownDisplay';

const AcademicDetail: FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { academics } = useAppSelector((state) => state.academics);
    const [loading, setLoading] = useState(_.isEmpty(academics));
    const { pid } = router.query;
    const currAcademic =
        _.isString(pid) && _.isNumber(parseInt(pid, 10)) ? academics[parseInt(pid, 10)] : null;

    useEffect(() => {
        (async () => {
            if (_.isEmpty(academics)) {
                await dispatch(getAllAcademics());
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <HashLoader size={50} color="#7C3AED" />
            </div>
        );
    }

    if (_.isEmpty(academics) || !currAcademic) {
        return <Error statusCode={404} />;
    }

    const parsedCurrAcademic = {
        id: pid,
        title: currAcademic.title,
        creator: currAcademic.creator,
        lateUpdated: formatDate(currAcademic.updatedDatetime, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }),
        coverImageUrl: currAcademic.coverImageUrl,
        categories: currAcademic.categories,
        content: currAcademic.content,
    };

    return (
        <div className="academics-detail px-5 md:px-28 lg:px-64 py-10">
            <MaterialCard className="w-full h-full rounded-t-md relative">
                <div className="overview-card md:h-96 flex flex-col md:flex-row">
                    <Tag categories={parsedCurrAcademic.categories} />
                    <div className="w-full h-1/2 md:w-2/3 md:h-full image-container relative">
                        <Image src={parsedCurrAcademic.coverImageUrl} layout="fill" priority />
                    </div>
                    <div className="h-1/2 md:w-1/3 md:h-full px-5 pt-3 pb-5">
                        <div className="h-1/2">
                            <h2 className="text-lg font-bold">Last Updated</h2>
                            <p>{parsedCurrAcademic.lateUpdated}</p>
                            <h2 className="text-lg mt-1 font-bold">Creator</h2>
                            <p>{parsedCurrAcademic.creator}</p>
                        </div>
                        <div className="h-1/2 flex flex-col">
                            <div className="h-3/4">
                                <p className="text-2xl font-bold text-justify title w-full">
                                    {parsedCurrAcademic.title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaterialCard>
            <MaterialCard className="mt-5 w-full h-full p-5 rounded-b-md">
            <MarkdownDisplay>{parsedCurrAcademic.content}</MarkdownDisplay>
            </MaterialCard>
        </div>
    );
};

export default AcademicDetail;
