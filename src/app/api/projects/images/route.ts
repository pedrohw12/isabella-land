import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const projectsDir = path.join(process.cwd(), 'public/images/projects');

    if (!fs.existsSync(projectsDir)) {
        return NextResponse.json(
            { error: 'Projects directory not found' },
            { status: 404 }
        );
    }

    const images = fs
        .readdirSync(projectsDir)
        .filter((file) => /\.(png|jpe?g|webp|gif)$/.test(file))
        .map((file) => `/images/projects/${file}`);

    return NextResponse.json({ images });
}
