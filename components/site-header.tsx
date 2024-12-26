import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Icons } from './icons';
import { MainNav } from './main-nav';


export function SiteHeader() {
    return <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4 py-4">
            <MainNav />
            <div className="flex flex-1 items-center justify-end space-x-2">
                <nav className="flex items-center">
                    <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
                        <div className={cn(buttonVariants({variant: "ghost"}), 
                        "w-10 px-0"
                        )}>
                            <Icons.gitHub className='h-4 w-4'></Icons.gitHub>
                            <span className="sr-only">GitHub</span>
                        </div>
                    </Link>
                    <Link href={siteConfig.links.instagram} target='_blank' rel='noreferrer'>
                        <div className={cn(buttonVariants({variant: "ghost"}), 
                        "w-10 px-0"
                        )}>
                            <Icons.instagram className='h-4 w-4'></Icons.instagram>
                            <span className="sr-only">Instagram</span>
                        </div>
                    </Link>
                    <Link href={siteConfig.links.blueSky} target='_blank' rel='noreferrer'>
                        <div className={cn(buttonVariants({variant: "ghost"}), 
                        "w-10 px-0"
                        )}>
                            <Icons.blueSky className='h-4 w-4'></Icons.blueSky>
                            <span className="sr-only">Instagram</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    </header>
}