import { Card, CardContent } from '@/components/ui/card';
import { LMS_CONSTANTS } from '@/constants';
import { useNavigation } from '@/hooks/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const DesktopMenu = () => {
    const { page, onSetPage } = useNavigation();
    return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
            <CardContent className="p-0 flex gap-2">
                {LMS_CONSTANTS.landingMenu.map(
                    ({ path, label, id, section, icon }) => {
                        return (
                            <Link
                                key={id}
                                href={path}
                                {...(section && {
                                    onClick: () => onSetPage(path),
                                })}
                                className={cn(
                                    'rounded-xl flex gap-2 py-2 px-4 items-center',
                                    page === path
                                        ? 'bg-slate-200 border-2 border-slate-300'
                                        : '',
                                )}
                            >
                                {page == path && icon}
                                {label}
                            </Link>
                        );
                    },
                )}
            </CardContent>
        </Card>
    );
};

export default DesktopMenu;
