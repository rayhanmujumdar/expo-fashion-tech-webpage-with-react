import bannerImage from '../../assert/1x/home-banner.png'
export default function Banner() {
    return (
        <section className="pb-20 pt-5">
            <img src={bannerImage} alt="banner-img" />
        </section>
    )
}
