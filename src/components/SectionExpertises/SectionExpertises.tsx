import './style.scss'

export default function SectionExpertises() {
    return (
        <section className="especialidades">
            <h1>Especialidades</h1>
            <div className="especialidades__grid">
                <div className="card">
                    <div className="card__icon">
                        <img
                            className="icon"
                            src="https://cdn-icons-png.flaticon.com/32/9423/9423061.png"
                        />
                    </div>
                    <h2>
                        <span className="chonky-underline underline-megenta">
                            Desenvolvimento WEB
                        </span>
                    </h2>
                    <p>Atuai durente anos com a tecnologias. para fornte e para back</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <img
                            className="icon"
                            src="https://cdn-icons-png.flaticon.com/32/2329/2329087.png"
                        />
                    </div>
                    <h2>
                        <span className="chonky-underline underline-blue">
                            Analise de Dados
                        </span>
                    </h2>
                    <p>Atuai durente anos com a tecnologias. para fornte e para back</p>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <img
                            className="icon"
                            src="https://cdn-icons-png.flaticon.com/32/1556/1556324.png"
                        />
                    </div>
                    <h2>
                        <span className="chonky-underline underline-orange">
                            Gerente de Projeto
                        </span>
                    </h2>
                    <p>Atuai durente anos com a tecnologias. para fornte e para back</p>
                </div>
            </div>
        </section>
    );
}