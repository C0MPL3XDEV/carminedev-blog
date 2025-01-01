import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';

const useMDXComponents = (code: string) => {
    const fn = new Function(code);
    return fn({...runtime}).default;
};

const components = {
    Image
}

interface mdxProps {
    code: string;
}

export function MDXContent({ code }: mdxProps) {
    const Component = useMDXComponents(code);
    return <Component components={components} />;
}