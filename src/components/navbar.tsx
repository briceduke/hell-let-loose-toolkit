import { Group, Title } from '@mantine/core';
import { IconBomb } from '@tabler/icons-react';
import classes from '../styles/Navbar.module.css';
import Link from 'next/link';

export function HeaderSearch() {

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Link href={'/'}>
                    <Group>
                        <IconBomb size={28} />
                        <Title order={3}>Hell Let Loose Toolkit</Title>
                    </Group>
                </Link>
            </div>
        </header>
    );
}