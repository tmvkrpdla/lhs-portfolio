import profile from "../data/profile";


function Contact(){


    const copyEmail = async()=>{

        await navigator.clipboard.writeText(profile.email);

        alert("이메일이 복사되었습니다.");

    };


    return (

        <section id="contact">


            <div className="section-title">
                CONTACT
            </div>



            <h2 className="section-heading">

                새로운 서비스를
                함께 만들어가고 싶습니다.

            </h2>



            <p className="section-desc">

                Java/Spring 기반 웹 서비스 개발부터
                운영까지 경험한 개발자입니다.

                안정적인 서비스와 좋은 사용자 경험을
                만드는 개발을 지향합니다.

            </p>


            <div className="contact-buttons">


                <button
                    className="btn btn-primary"
                    onClick={copyEmail}
                >

                    ✉ tmvkrpdla@gmail.com

                </button>


                <a
                    className="btn btn-outline"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                >

                    GitHub

                </a>


                <a
                    className="btn btn-outline"
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="이호성_경력기술서.pdf"
                >
                    📄 이력서 PDF
                </a>


            </div>


        </section>

    );

}


export default Contact;