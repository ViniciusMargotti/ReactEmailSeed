import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function BemVindo() {
    const logoNextFit = 'https://blog.nextfit.com.br/wp-content/uploads/2022/03/logo-next-fit-sistema-academia.webp'
    const logoCircle = 'https://play-lh.googleusercontent.com/rYrxfTNYlwkgXUaHpzo7A3GTBMRTotf3S4rwn6nc5vYSBhmd3BkKw58xVJVziKFemw'

    return (
        <Html>
            <Head />
            <Preview>Join bukinoshita on Vercel</Preview>
            <Section style={main}>
                <Container style={container}>
                    <Section style={{ marginTop: '32px' }}>
                        <Img
                            width={150}
                            src={logoNextFit}
                            alt="Vercel"
                            style={logo}
                        />
                    </Section>
                    <Text style={h1}>
                        Olá <strong>Seja bem vindo</strong> ao <strong>Next Fit</strong>
                    </Text>
                    <Text style={text}>Olá Fitness,</Text>
                    <Text style={text}>
                        <strong>Next Fit</strong> (
                        <Link href="" style={link}>
                            nextfit.com.br
                        </Link>
                        ) enviou um convite para você participar do time <strong>Fitness Criciúma</strong>{' '}
                        <strong>Vercel</strong>.
                    </Text>
                    <table
                        style={spacing}
                        border={0}
                        cellPadding="0"
                        cellSpacing="10"
                        align="center"
                    >
                        <tr>
                            <td style={center} align="left" valign="middle">
                                <Img
                                    style={avatar}
                                    src={logoCircle}
                                    width="64"
                                    height="64"
                                />
                            </td>
                        </tr>
                    </table>
                    <Section style={{ textAlign: 'center' }}>
                        <Button
                            pX={20}
                            pY={12}
                            style={btn}
                            href="https://vercel.com/teams/invite/foo"
                        >
                           Entrar no time
                        </Button>
                    </Section>
                    <Text style={text}>
                        <br />
                        Ou copie e cole o URL no seu navegador:{' '}
                        <Link
                            href="nextfit.com.br"
                            target="_blank"
                            style={link}
                            rel="noreferrer"
                        >
                            nextfit.com.br
                        </Link>
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Este convite foi enviado para Fitness. Se você não esperava este convite, pode ignorar este e-mail. Se você está preocupado com a segurança de sua conta, responda a este e-mail para entrar em contato conosco.
                    </Text>
                </Container>
            </Section>
        </Html>
    );
}

const main = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
};

const container = {
    border: '1px solid #eaeaea',
    borderRadius: '5px',
    margin: '40px auto',
    padding: '20px',
    width: '465px',
};

const logo = {
    margin: '0 auto',
};

const h1 = {
    color: '#000',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'normal',
    textAlign: 'center' as const,
    margin: '30px 0',
    padding: '0',
};

const avatar = {
    borderRadius: '100%',
};

const link = {
    color: '#067df7',
    textDecoration: 'none',
};

const text = {
    color: '#000',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    lineHeight: '24px',
};

const black = {
    color: 'black',
};

const center = {
    verticalAlign: 'middle',
};

const btn = {
    backgroundColor: '#591c98',
    borderRadius: '5px',
    color: '#fff',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '50px',
    textDecoration: 'none',
    textAlign: 'center' as const,
};

const spacing = {
    marginBottom: '26px',
};

const hr = {
    border: 'none',
    borderTop: '1px solid #eaeaea',
    margin: '26px 0',
    width: '100%',
};

const footer = {
    color: '#666666',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '24px',
};