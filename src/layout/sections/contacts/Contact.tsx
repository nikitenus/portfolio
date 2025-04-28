import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {S} from './Contact_Styles.ts';
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

export const Contact = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_wxugknw', 'template_5nh8aab', form.current, {
                publicKey: 'rRJ7FsMYEd7L6tk25',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={'name'} name={'user_name'}/>
                    <S.Field required placeholder={'email'} name={'email'}/>
                    <S.Field required placeholder={'subject'} name={'subject'}/>
                    <S.Field required placeholder={'message'} as={'textarea'} name={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};


