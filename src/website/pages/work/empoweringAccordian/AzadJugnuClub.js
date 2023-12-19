import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const AzadJugnuClub = () => {
    return (
        <>
            <Row>
                <Col sm={6}>
                    <Image src={require('../../../assets/images/azadclub.jpg')} alt="muskaan" className='w-100' />

                </Col>
                <Col sm={6}>
                    <p>
                        गाँधी नगर में एअरपोर्ट के पास एक खेत में घुमुन्तु एवं विमुक्त जनजाति के कुचबंदिया समुदाय के लगभग 60 परिवार अपनी झुग्गी बनाकर रह रहे है| डेरे में लगभग 400 लोग हैं| इनके डेरे में बच्चे और बुजुर्ग महिलाऐं भी हैं| ये समुदाय जिला शिवपुरी, मध्यप्रदेश और जिला बारां व जिला कोटा, राजस्थान के रहने वाले हैं| ये मुख्यतः फेरी लगाकर हल्दी, मिर्च और धनिया व अन्य मसाले बेचने का धंधा करते हैं व कुछ लोग फेरी लगाकर कम्बल बेचने का काम भी करते है| ये लोग हर साल इस समय अपने डेरे लेकर कमाने खाने के लिए निकल जाते है| लॉक डाउन के कारण यहाँ फ़स गए हैं| वे अत्यंत ही कठिन परिस्थितियों में रह रहे है, इनके पास न तो पीने के पानी की व्यवस्था है और न ही खाने के लिए राशन है और ना ही पैसे हैं| आसपास मांगने जाते है तो भी कुछ नहीं मिलता, क्योंकि लोगों के पास भी कुछ नहीं है जो इनको कुछ दे दें| जब वे लोग आसपास की बस्तियों में पानी लेने जाते है तो बस्ती के लोग भी बीमारी के डर से पानी लेने नहीं देते और भगा देते हैं| लॉक डाउन के 28 दिन में
                        नगर निगम से 2-3 बार पानी का टैंकर आया है नहाने का तो छोडो, पीने का पानी तक उपलब्ध नहीं है| डेरे के बच्चों को कच्ची खिचड़ी खाकर, जो किसी समूह ने दी थी, पेट दर्द की समस्या हुई हैं|
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default AzadJugnuClub