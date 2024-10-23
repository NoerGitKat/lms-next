'use server';

import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export const loadAuthenticatedUser = async () => {
    try {
        const clerkUser = await currentUser();
        if (!clerkUser) return { status: 404 };

        const user = await prisma.user.findUnique({
            where: {
                clerkId: clerkUser.id,
            },
            select: {
                id: true,
                firstname: true,
                lastname: true,
            },
        });

        if (!user) return { status: 404 };

        return {
            status: 200,
            id: user.id,
            image: clerkUser.imageUrl,
            username: `${user.firstname} ${user.lastname}`,
        };
    } catch (error) {
        return { msg: error, status: 500 };
    }
};
