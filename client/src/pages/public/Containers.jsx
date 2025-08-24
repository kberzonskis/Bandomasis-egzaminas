import { PublicPageTitle } from '../../components/PublicPageTitle';
import { ContainerCard } from '../../components/ContainerCard';
import { useContext } from 'react';
import { ContainersContext } from '../../context/containers/ContainersContext';



export function ContainersPage() {
     const { publicContainers } = useContext(ContainersContext);
    const containersData = [
        {
            title: 'Action',
            description: 'Lorem ipsum dolor sit amet.',
            boxesCount: 7,
            urlSlug: 'action',
        },
        {
            title: 'Crime',
            description: 'Very lorem ipsum very dolor sit amet.',
            boxesCount: 66,
            urlSlug: 'crime',
        },
    ];

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='Containers' />

            <div className="container px-4" id="featured-3">
                <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {publicContainers.map(container => <ContainerCard key={container.title} container={container} />)}
                </div>
            </div>
        </main>
    );
}