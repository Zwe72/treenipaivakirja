export default function Document() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6">
                Harjoitustyön dokumentaatio
            </h1>

            {/* Responsiivisuus */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Responsiivisuus
                </h2>

                <p className="text-lg mb-3">
                    Sovelluksen toimivuutta testattiin eri kokoisilla
                    päätelaitteilla ja selainikkunoilla.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Tietokone</li>
                    <li>Tabletti</li>
                    <li>Puhelin</li>
                </ul>

                <p className="text-lg mt-3">
                    Sovellus mukautuu eri näyttökokoihin ja käyttö onnistuu
                    myös mobiililaitteilla.
                </p>
            </section>

            {/* Selainyhteensopivuus */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Selainyhteensopivuus
                </h2>

                <p className="text-lg mb-3">
                    Sovelluksen toimivuutta testattiin uusimmilla selaimilla.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li> Google Chrome versio 149 </li>
                    <p>Kaikki toiminnot toimii ja sivusto avautui moitteettomasti</p>
                    <li>Microsoft Edge versio 148</li>
                    <p>Sivusto avautui nopeasti ja toiminnat toimivat miten pitäisi olla.</p>
                    <li>Mozilla Firefox versio 149</li>
                    <p></p>
                </ul>

                <p className="text-lg mt-3">
                    Sovellus toimi normaalisti kaikilla testatuilla selaimilla.
                </p>
            </section>

            {/* Latautumisaika */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Sivujen latautumisaika
                </h2>

                <p className="text-lg">
                    Sivujen latautuminen testattiin desktopissa sekä puhelimella.
                </p>

            </section>
        </div>
    );
}