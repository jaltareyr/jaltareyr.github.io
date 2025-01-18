'use client'

export default function Home() {
    const googleDriveLink = 'https://drive.google.com/file/d/1Ejr6eKBFVNW3Bqk-O3xspz-d188x1u7_/view?usp=sharing';

    return (
        <main className="min-h-screen py-8 bg-background">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12">RESUME</h2>
            <PDFViewer googleDriveLink={googleDriveLink} />
        </main>
    );
}

interface PDFViewerProps {
    googleDriveLink: string;
}

function PDFViewer({ googleDriveLink }: PDFViewerProps) {
    const transformedLink = transformGoogleDriveLink(googleDriveLink);

    return (
        <div className="w-full h-screen max-w-3xl mx-auto p-4 rounded-lg shadow-lg bg-gray-200">
            <iframe
                src={transformedLink}
                className="w-full h-full overflow-auto custom-scrollbar rounded-lg"
                style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                }}
                allow="autoplay"
                frameBorder="0"
            ></iframe>
        </div>
    );
}

function transformGoogleDriveLink(link: string): string {
    const fileId = link.match(/[-\w]{25,}(?!.*[-\w]{25,})/)?.[0];

    if (!fileId) {
        throw new Error('Invalid Google Drive link');
    }

    return `https://drive.google.com/file/d/${fileId}/preview`;
}