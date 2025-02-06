// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store/store';
import "../styles/store.css"

const Store = () => {
    // const dispatch = useDispatch();
    // const storeState = useSelector((state: RootState) => state.store);

    // // Add null checks and default values
    // const hearts = storeState?.hearts || 0;
    // const gems = storeState?.gems || 0;
    // const streakFreezes = storeState?.streakFreezes || 0;

    // const handlePurchaseHearts = () => {
    //     if (gems >= 350) {
    //         dispatch({ type: 'PURCHASE_HEARTS' });
    //     } else {
    //         alert('Not enough gems!');
    //     }
    // };

    // const handlePurchaseStreakFreeze = () => {
    //     if (gems >= 200) {
    //         dispatch({ type: 'PURCHASE_STREAK_FREEZE' });
    //     } else {
    //         alert('Not enough gems!');
    //     }
    // };

    return (
        <div className="store-container">
            {/* <div className="user-stats">
                <p>Hearts: {hearts}</p>
                <p>Gems: {gems}</p>
                <p>Streak Freezes: {streakFreezes}</p>
            </div> */}
            <h2 className="heart-title">Hearts</h2>
            <div className="heart-container">
                <div className="heart-purchase">
                    <img className="heart-icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/547ffcf0e6256af421ad1a32c26b8f1a.svg" alt="heart" />
                    <div className="heart-purchase-text">
                        <h4 className="heart-purchase-name">refill Hearts</h4>
                        <p className="heart-purchase-description">Get full hearts so you can worry less about making mistakes in a lesson</p>
                    </div>
                    <button className="heart-purchase-button" >
                        <p className="heart-purchase-button-text">Get For:</p>
                        <div className="heart-purchase-button-price-container">

                            <img className="heart-purchase-button-gem" src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="gem" />
                            <p className="heart-purchase-button-price">350</p>
                        </div>
                    </button>
                </div>

            </div>

            <div className='power-ups-container'>
                <h2 className="streak-freeze-title">Power-ups</h2>
                <div className="streak-freeze-container">
                    <div className="streak-freeze-purchase">
                        <img className="streak-freeze-icon" src="https://i.postimg.cc/CxHGQSsV/image.png" alt="heart" />
                        <div className="streak-freeze-purchase-text">

                            <h4 className="streak-freeze-purchase-name">Streak Freeze</h4>

                            <p className="streak-freeze-purchase-description">Streak Freeze allows your streak to remain in place for one full day of inactivity.</p>
                        </div>
                        <button className="streak-freeze-purchase-button" >
                            <p className="streak-freeze-purchase-button-text">Get For:</p>


                            <div className="streak-freeze-purchase-button-price-container">

                                <img className="streak-freeze-purchase-button-gem" src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg" alt="gem" />
                                <p className="streak-freeze-purchase-button-price">200</p>
                            </div>
                        </button>

                    </div>

                </div>

            </div>

        </div>


    );
};

export default Store;


