import bannerImage from '../../assert/1x/home-banner.png'
export default function HomeBanner() {
    return (
        <div className="pb-20 pt-5">
            <img src={bannerImage} alt="banner-img" />
        </div>
    )
}
