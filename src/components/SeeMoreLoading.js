import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function SeeMoreLoading() {

    return (
        <SkeletonTheme baseColor="#3d5976" highlightColor="#456587">
            <div className="seemore-modal">
                <div className="overlay"></div>
                <div className="seemore-modal-content">
                    <div className="card" style={{borderRadius: "20px"}}>
                        <div className='text-center mx-auto mt-2 mb-4 pb-2'>
                            <Skeleton count={1} height={190} width={200} baseColor="#e8e8e866" highlightColor="#eeeeee66" />
                        </div>
                        <div className="card-body textos-pokemon pb-0" style={{borderRadius: "20px"}}>
                            <h5 className="card-title h2 text-white my-2 px-3">
                                <Skeleton count={1} />
                            </h5>

                            <ul className="list-group list-group-flush py2 mb-3" style={{borderRadius: "20px"}}>

                                <li className="list-group-item bg-custom-pokemon text-white list-item-custom-pokemon" key="abilities">
                                    <Skeleton count={5} height={16} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
