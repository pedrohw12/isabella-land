'use client';

import { Flex, SmartImage } from '@/once-ui/components';

interface ProjectCardProps {
    image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image }) => {
    return (
        <Flex fillWidth gap="m" direction="column">
            <SmartImage
                tabIndex={0}
                radius="l"
                alt="Project Image"
                aspectRatio="16 / 9"
                src={image}
                style={{
                    border: '1px solid var(--neutral-alpha-weak)',
                }}
            />
        </Flex>
    );
};
