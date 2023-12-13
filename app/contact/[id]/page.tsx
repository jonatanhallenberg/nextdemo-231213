
import { Card } from '@/app/components/Card';
import buttonStyles from './button.module.css';
import { Button } from '@/app/components/Button';

const ContactPage = ({ params }) => {
    // { id: '33' }
    console.log('params', params);

    const id = parseInt(params.id);
    if (Number.isNaN(id)) {
        return "Not a valid number";
    }

    const buttonStyle = {
        backgroundColor: "yellow",
        color: "white"
    }

    // { blueButton: 'button_blueButton__EBS51', __checksum: '753694db68c2' }
    console.log('buttonStyles', buttonStyles);

    // .blueButton {
    //     background-color: blue;
    //     color: white;
    //     border-radius: 5px;
    //     padding: 5px;
    // }

    return (
        <main>
            <h1>Kontakt</h1>
            <p>Den här sidan är för kontakt med id: {id}</p>
            
            <button className="bg-blue-800 text-white rounded-md p-1">Tailwind Button</button>

            <button style={buttonStyle}>Klicka här</button>
            <button className={`${buttonStyles.blueButton} ${buttonStyles.bigButton}`}>CSS Moduled button</button>

            <Card title="Viktig information">Här står någonting viktigt!</Card>
        
            <Button variant="green">Klicka här</Button>
            <Button variant="red">Klicka här</Button>

        </main>
    )

}

export default ContactPage;