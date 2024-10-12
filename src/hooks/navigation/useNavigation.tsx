'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const useNavigation = () => {
    const pathname = usePathname();
    const [page, setPage] = useState<string>(pathname);

    const onSetPage = (page: string) => setPage(page);

    return { page, onSetPage };
};
