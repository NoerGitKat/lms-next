import { LMS_CONSTANTS } from '@/constants';
import { useNavigation } from '@/hooks/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const MobileMenu = () => {
    const { page, onSetPage } = useNavigation();
    return (
        <section className="flex flex-col mt-10">
            {LMS_CONSTANTS.landingMenu.map(
                ({ path, section, id, icon, label }) => (
                    <Link
                        href={path}
                        {...(section && {
                            onClick: () => onSetPage(path),
                        })}
                        className={cn(
                            'rounded-xl flex gap-2 py-2 px-4 items-center',
                            page == path
                                ? 'bg-themeGray bg-slate-200 border-2 border-slate-300'
                                : '',
                        )}
                        key={id}
                    >
                        {icon}
                        {label}
                    </Link>
                ),
            )}
        </section>
    );
};

export default MobileMenu;
