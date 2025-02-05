'use client';

import { Flex } from '@/once-ui/components';
import { useEffect, useState } from 'react';
import { ProjectCard } from './project-card';

interface ProjectsProps {
    range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
    const [images, setImages] = useState<string[]>([]);

    // Fetch the images from the API route
    useEffect(() => {
        async function fetchImages() {
            const res = await fetch('/api/projects/images');
            const data = await res.json();
            setImages(data.images);
        }
        fetchImages();
    }, []);

    const displayedImages = range
        ? images.slice(range[0] - 1, range[1] ?? images.length)
        : images;

    return (
        <Flex fillWidth gap="xl" marginBottom="40" paddingX="l" direction="column">
            {displayedImages.map((image, index) => (
                <ProjectCard key={index} image={image} />
            ))}
        </Flex>
    );
}
