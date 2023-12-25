"use client"
import React,{ useState } from 'react'
import styles from './page.module.css'

export default function Page() {

    const [viewAnswers, setViewAnswers] = React.useState(null);

    const handleClick = (id) => {
        if (viewAnswers === id) {
            setViewAnswers(null); // Collapse the clicked question if it's already expanded
          } else {
            setViewAnswers(id); // Expand the clicked question
          }
        // setViewAnswers(!viewAnswers)
        // console.log(viewAnswers)
    }

    const faq = [
        {   
            id:1,
            question: "Whether an Indian citizen partner is required for a foreigner or Foreign Company to start a business in India?",
            answer: "No, if a Foreign Company wants to start a business in India in the Form of a branch office or a liaison office or as a 100% subsidiary then it does not require an Indian partner in India. Such legal entities if started with the required permissions then they can legally repatriate the funds back to their country at any point of time. Only in the cases of Joint ventures Indian partner is required. In addition to that there are restrictions with regards to the permissibility of FDI in certain sectors. If it is a 100% automatic route, then approval of the Government to start the business is not necessary. In such automatic route cases paper work to be done through the dealer and to be approved by the Reserve Bank of India."
        },
        {   
            id:2,
            question:"What is the Fee for First consultation?",
            answer:"We do not charge any fee for first consultation if the consultation is given over email or telephone. If the personal consultation is done then the fee will be on the basis of the time spent on the matter."
        },
        {   
            id:3,
            question:"What are the languages the Firm is comfortable with?",
            answer: "The Firm normally uses English as the base language for communication. But the Firm has tied up with an internationally reputed translation Company to handle communications in other languages including French, Chinese, Spanish, Japanese, Korean and Arabic."
        },
        {   
            id:4,
            question: "What are the provisions governing International Arbitrations in India?",
            answer: "Indian Arbitration and Conciliation Act 1996 is the law which governs international Arbitration in India."
        },
        {
          id: 5,
          question: "What is the process for estate planning in India?",
          answer: "Estate planning in India involves creating a comprehensive plan for the distribution of your assets and wealth after your passing. It typically includes drafting a will, designating beneficiaries, and considering tax implications. Consult with an estate planning attorney to ensure your assets are distributed according to your wishes."
      },
      {
          id: 6,
          question: "How can I protect my business from legal disputes?",
          answer: "To protect your business from legal disputes, it's essential to have well-drafted contracts, clear business agreements, and compliance with relevant laws and regulations. Additionally, consider alternative dispute resolution methods like mediation or arbitration. Consulting with a business attorney can help you establish effective legal safeguards."
      },
      {
          id: 7,
          question: "What should I do if I'm facing a wrongful termination at work?",
          answer: "If you believe you've been wrongfully terminated, gather evidence of the circumstances leading to your termination and consult with an employment attorney. They can help you understand your rights and potential legal actions you can take, such as filing a wrongful termination lawsuit."
      },
      {
          id: 8,
          question: "What are the legal requirements for starting a non-profit organization (NGO) in India?",
          answer: "Starting an NGO in India involves registering under the appropriate law, such as the Societies Registration Act, 1860, or the Companies Act, 2013. NGOs must also comply with tax and regulatory requirements. Seek legal counsel to navigate the complex process of establishing an NGO."
      },
      {
          id: 9,
          question: "What is the role of a power of attorney in legal matters?",
          answer: "A power of attorney (POA) is a legal document that grants someone the authority to act on your behalf in various matters, such as financial, legal, or medical decisions. There are different types of POAs, each with specific powers and limitations. Consult with an attorney to create a POA tailored to your needs."
      },
      {
          id: 10,
          question: "What steps should I take if I'm involved in a car accident?",
          answer: "If you're in a car accident, prioritize safety and seek medical attention for injuries. Exchange information with the other driver(s), document the accident scene, and report it to the police. Notify your insurance company, and consider consulting a personal injury attorney if you plan to file a claim for damages or injuries."
      }, {
        id: 11,
        question: "What are the legal implications of intellectual property infringement?",
        answer: "Intellectual property infringement can lead to legal actions, including lawsuits for damages and injunctions to prevent further infringement. It's essential to protect your intellectual property rights and, if necessary, consult with an intellectual property attorney to enforce those rights."
    },
    {
        id: 12,
        question: "How can I resolve a contract dispute with a business partner or client?",
        answer: "Contract disputes can often be resolved through negotiation or alternative dispute resolution methods like mediation or arbitration. If informal methods fail, you may need to pursue a lawsuit. Consult with a business attorney to explore your options and protect your interests."
    },
    {
        id: 13,
        question: "What steps should I take if I'm accused of a white-collar crime?",
        answer: "White-collar crimes such as fraud, embezzlement, or insider trading can result in severe legal consequences. If accused, refrain from making statements to authorities and consult with a criminal defense attorney immediately to protect your rights and build a defense strategy."
    },
    {
        id: 14,
        question: "What are the legal requirements for starting a new business entity in India?",
        answer: "Starting a new business in India involves legal steps like company registration, obtaining necessary licenses, and complying with tax regulations. The specific requirements vary based on the business structure and industry. Seek legal guidance to navigate the process smoothly."
    },
    {
        id: 15,
        question: "How can I handle a family dispute such as divorce or child custody?",
        answer: "Family disputes require careful handling. Consult with a family law attorney to explore options like divorce mediation or collaborative law. In contentious cases, litigation may be necessary to protect your rights and the well-being of your children."
    },
    {
        id: 16,
        question: "What is the process for obtaining a visa to work or study in another country?",
        answer: "Obtaining a visa for work or study abroad involves a complex process with specific requirements for each country. Consult with an immigration attorney who can guide you through visa applications, interview preparations, and legal compliance."
    }
    ] 

    const questions = faq.map((obj)=> {
        return (
            <div className={styles.FAQContainer} key={obj.id} onClick={() => handleClick(obj.id)}>
                <div className={styles.Question} >
                    {obj.question}
                </div>
                {(viewAnswers === obj.id)&&
                <div className={styles.answers}>
                    {obj.answer}
                </div>}
            </div>
        )
    })

  return (
    <div className={styles.maincontainer}>
      <div className={styles.title}>Frequently Asked Questions (FAQs)</div>
      <div className={styles.container}>
        {questions}
      </div>
    </div>
  )
}


