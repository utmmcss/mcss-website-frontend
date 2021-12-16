import React, { FC } from 'react';
import EventFilter from '@components/Common/EventFilter';

interface IProps {}

const options = ['All', 'Today', 'In Person', 'Online', 'Computer Science', 'Mathematics', 'Statistics'];

const Events: FC<IProps> = () => <EventFilter optionNames={options} />;

export default Events;
