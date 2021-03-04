import Card from 'react-bootstrap/card'
import styles from './cardCustom.module.css'


const CardCustom = ({settings}) => {
    console.log(settings);
    const Img = "img_url" in settings ? <Card.Img variant="top" src={settings.img_url}/> : ""
    const Title = "img_url" in settings ? <Card.Title>{settings.title}</Card.Title> : ""
    const Subtitle = "img_url" in settings ? <Card.Subtitle className="mb-2 text-muted">{settings.subtitle}</Card.Subtitle> : ""
    const Text = "img_url" in settings ? <Card.Text>{settings.text}</Card.Text> : ""

    return (
        <Card className={styles.card}>
            <Card.Body>
                {Img}
                {Title}
                {Subtitle}
                {Text}
            </Card.Body>
        </Card>
    )
}
export default CardCustom