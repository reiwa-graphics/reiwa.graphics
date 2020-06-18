import Meta from '../libs/meta';

export default () => {
    return (
        <>
            <Meta />
            <main>
                <div className="background">
                    <video id="ytplayer" autoPlay loop muted playsInline src="./after.mp4" />
                    <div className="texts">
                        <p className="texts__title">REIWA Graphics</p>
                        <p className="texts__descriptions">あなたの仕事をさらに輝かせる<br />制作プロダクション</p>
                    </div>
                </div>
            </main>
        </>
    )
};