import { createInertiaApp } from '@inertiajs/react';
import './types';

const appName = import.meta.env.VITE_APP_NAME || 'CBT SMKN 9 Kota Bekasi';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#2563eb',
    },
    resolve: async (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        // Initialize React root
        import('react-dom/client').then(({ createRoot }) => {
            const root = createRoot(el);
            root.render(<App {...props} />);
        });
    },
});
