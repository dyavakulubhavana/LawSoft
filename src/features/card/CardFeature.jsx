import React from 'react'
import { UserGroupIcon, DocumentTextIcon, DocumentPlusIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
const iconMap = {
    user: UserGroupIcon,
    file: DocumentTextIcon,
    document: DocumentPlusIcon,
    libary: BuildingLibraryIcon,
};
export const CardFeature = ({ iconName, title, bgcolor }) => {
    const SelectedIcon = iconMap[iconName];
    if (!SelectedIcon) {
        return <p>Icon not found</p>;
    }

    return (
        <div className={`h-40 w-40 grid justify-center align-middle border-solid border-2 rounded-lg cursor-pointer hover:bg-sky-500 focus:outline-none focus:ring focus:ring-violet-300 active:bg-sky-700 ${bgcolor}`}>
            <SelectedIcon className='h-20 w-20 justify-self-center'></SelectedIcon>
            <h1 className='text-xl font-bold'>{title}</h1>
        </div>
    )
}
