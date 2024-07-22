import React from 'react';
import Title from "../parts/Title";
// Sass
import  "./PrivactPolicy.scss";

const PrivacyPolicy = () => {
    return (
        <div id="privacy-policy" className="privacy-policy">
            <div className="container-m p-1">
                <Title title=".privacyPolicy" subtitle="See how I process your data" className="secondary" direction="left"/>
                <div className="info__content">
                    <h2 className="info__header paragraph header-l" >§.1 GENERAL</h2>
                    <p className="info__text text" >Pursuant to Article 12(1) of the Regulation (EU)
                        2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of
                        natural persons with regard to the processing of personal data and on the free movement of such
                        data and repealing Directive 95/46/EC (hereinafter "RODO"), Michał Łukaszewicz, 10/17 Biskupa
                        Albina Małysiaka Street, 30-389 Kraków (hereinafter "Michał Łukaszewicz Portfolio"), presents
                        basic information regarding the processing of your personal data</p>
                    <h3 className="info__header header-m" >ADMINISTRATOR OF THE DATA</h3>
                    <p className="info__text text" >The administrator of your personal data is Michał
                        Łukaszewicz, 10/17 Biskupa Albina Małysiaka Street, 30-389 Kraków.</p>
                    <h3 className="info__header header-m" >CONTACT</h3>
                    <p className="info__text text" >You can contact Michał Łukaszewicz Portfolio in
                        the following way:</p>
                    <ul className="info__list">
                        <li className="info__item text" >by e-mail address to:
                            <a href="mailto:michal.lukaszewicz.dev@gmail.com"> michal.lukaszewicz.dev@gmail.com</a>
                        </li>
                        <li className="info__item text" >by phone to: <a href="tel:73154095"> 73154095</a></li>
                    </ul>
                    <h3 className="info__header header-m" >PURPOSES AND LEGAL BASIS FOR DATA
                        PROCESSING</h3>
                    <p className="info__text text" >Your personal data are processed by Michał
                        Łukaszewicz Portfolio for the following purposes:</p>
                    <ul className="info__list">
                        <li className="info__item text" >Conclusion and execution of a contract (legal
                            basis: Article 6(1)(b) of the RODO).
                        </li>
                        <li className="info__item text" >Fulfillment of obligations incumbent on the
                            person Michał Łukaszewicz Portfolio under the law (legal basis: Article 6(1)(c) RODO).
                        </li>
                        <li className="info__item text" >Realization of legitimate interests of Michał
                            Łukaszewicz Portfolio, and in particular for the purposes of marketing and promotion of
                            Michał Łukaszewicz Dev products and services, for archival, evidential, statistical,
                            reporting purposes, for the purpose of asserting claims or defending against them (legal
                            basis: Article 6(1)(f) RODO).
                        </li>
                        <li className="info__item text" >Your personal data will be processed only on
                            the basis of your previously granted consent, to the extent and for the purpose expressed
                            therein (legal basis: Article 6(1)(a), Article 9(2)(a) RODO).
                        </li>
                    </ul>
                    <h3 className="info__header header-m" >THE TIME DURING WHICH PERSONAL DATA WILL BE PROCESSED</h3>
                    <p className="info__text text" >Michał Łukaszewicz Portfolio will process your
                        personal data for the term necessary to achieve the purposes for which they were collected,
                        i.e.:</p>
                    <ul className="info__list">
                        <li className="info__item text" >Implementation of the contract concluded with
                            Michał Łukaszewicz Portfolio for the term of its validity, and after that time for the term
                            resulting from legal provisions or for the implementation of the legitimate interests of
                            Michał Łukaszewicz Portfolio, including securing and pursuing any claims.
                        </li>
                        <li className="info__item text" >Fulfilling legal obligations imposed on
                            Michał Łukaszewicz Portfolio for the term and to the extent required by law.
                        </li>
                        <li className="info__item text" >Your personal data will be processed in order
                            to pursue the legally justified interests of Michał Łukaszewicz Portfolio, referred to
                            above, for a term until these interests are realized or you raise an objection to such
                            processing.
                        </li>
                        <li className="info__item text" >Your personal data will be processed on the
                            basis of your consent until you withdraw such consent.
                        </li>
                    </ul>
                    <h3 className="info__header header-m" >RECIPIENTS OF THE DATA</h3>
                    <p className="info__text text" >Your personal data may be shared by Michał Łukaszewicz Portfolio with the following recipients:</p>
                    <ul className="info__list">
                        <li className="info__item text" >Entities provided for by law , entities
                            authorized to do so under other provisions of law, to the extent that the information is
                            necessary in connection with the performance of the contract for the provision of services ,
                            courts and prosecutors and other public authorities in connection with ongoing proceedings.
                        </li>
                        <li className="info__item text" >Entities that process personal data on behalf
                            of and for the benefit of Michał Łukaszewicz Portfolio - so-called processors.
                        </li>
                    </ul>
                    <h3 className="info__header header-m" >RIGHTS OF THE DATA SUBJECT</h3>
                    <p className="info__text text" >In connection with the processing of your data by
                        Michał Łukaszewicz Portfolio, you have the following rights:</p>
                    <ul className="info__list">
                        <li className="info__item text" >The right to access the content of your
                            personal data and to obtain information about, among other things, the categories of data
                            and the purposes of their processing, as well as to obtain a copy of your data (Article 15
                            RODO).
                        </li>
                        <li className="info__item text" >The right to rectify incorrect and complete
                            missing data (Article 16 of the RODO).
                        </li>
                        <li className="info__item text" >The right to request deletion of data - the
                            so-called "right to be forgotten" (Article 17 RODO), in case:
                        </li>
                        <li className="info__item text" >Personal data are no longer necessary for the
                            purposes for which they were collected or otherwise processed,
                        </li>
                        <li className="info__item text" >The data subject has withdrawn the consent on
                            which the processing is based and there is no other legal basis for the processing
                        </li>
                        <li className="info__item text" >The data subject objects to the processing,
                        </li>
                        <li className="info__item text" >Personal data were processed illegally,
                            imposed by law, in which case failure to provide the required data may cause an obstacle to
                            the execution of the contract by Michał Łukaszewicz Portfolio. In the event that personal
                            data is collected on the basis of consent, the provision of such data is voluntary.
                        </li>
                    </ul>
                    <h2 className="info__header header-l" >§2. COOKIES</h2>
                    <ul className="info__list">
                        <li className="info__item text" >The michallukaszewicz.pl website uses
                            "cookies".These are small text files sent by a web server and stored by a web browser
                            client. When the browser reconnects to the site, it recognizes the type of device from which
                            the user is connecting. The parameters allow only the server that created them to read the
                            information they contain. Cookies thus facilitate the use of previously visited sites.
                        </li>
                        <li className="info__item text" >The information collected includes IP
                            address, type of browser used, language, type of operating system, ISP, time and date
                            information, location.
                        </li>
                        <li className="info__item text" >The data collected is used to monitor and see
                            how users use our sites in order to improve the site by providing a more efficient and
                            seamless navigation experience. We monitor user information using the Google Analytics tool,
                            which records user behavior on the site.
                        </li>
                        <li className="info__item text" >Cookies identify the user, allowing the
                            content of the site he uses to be tailored to his needs.By remembering his or her
                            preferences, it makes it possible to appropriately tailor advertisements directed to him or
                            her. We use cookies to guarantee the highest standard of convenience of our service, and
                            collected data are used only inside Michał Łukaszewicz Portfolio in order to optimize
                            operations.
                        </li>
                    </ul>
                    <h3 className="info__header header-m" >THE WEBSITE MICHAŁ ŁUKASZEWICZ PORTFOLIO,
                        USES COOKIES FOR PURPOSES:</h3>
                    <ul className="info__list">
                        <li className="info__item text" >"necessary" cookies to enable the use of
                            services available on the site, such as authentication cookies used for services that
                            require authentication on the site,
                        </li>
                        <li className="info__item text" >cookies for security purposes, such as.</li>
                        <li className="info__item text" >"performance" cookies, which allow you to
                            collect information about the use of the website's pages
                        </li>
                        <li className="info__item text" >"functional" cookies, which allow
                            "remembering" the user's selected settings and personalizing the user's interface, e.g. with
                            regard to the user's chosen language or region of origin, font size, website design, etc,
                        </li>
                        <li className="info__item text" >"advertising" cookies, allowing to provide
                            users with advertising content more tailored to their interests.
                        </li>
                    </ul>
                    <p className="info__text text" >The user has the option to disable or restore the
                        collection of cookies at any time by changing the settings in the web browser.</p>
                    <p className="info__text text" >The site also uses third-party technology that
                        tracks user activities: Google Analytics statistics. You will find information about their
                        privacy policies on the relevant pages listed below:</p>
                    <p className="info__text text" >Google – <a href="https://policies.google.com/privacy?hl=en">link</a></p>
                    <p className="info__text text" >This privacy policy is effective as of 01/01/2021.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;