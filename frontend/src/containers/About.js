import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/sailboat.jpg';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [brokers, setBrokers] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/brokers/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getBrokers = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/brokers/`, config);
                setBrokers(res.data);
            }
            catch (err) {

            }
        };

        getBrokers();
    }, []);

    const getAllBrokers = () => {
        let allBrokers = [];
        let results = [];

        brokers.map(broker => {
            return allBrokers.push(
                <Fragment key={broker.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={broker.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{broker.name}</h3>
                    <p className='about__contact'>{broker.phone}</p>
                    <p className='about__contact'>{broker.email}</p>
                    <p className='about__about'>{broker.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < brokers.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allBrokers[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allBrokers[i+1] ? allBrokers[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allBrokers[i+2] ? allBrokers[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };

    return (
        <main className='about'>
            <Helmet>
                <title>Trident Sailboats - About</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Trident Sailboats</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>We find the perfect boat for you</h2>
                        <p className='about__paragraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien a diam eleifend faucibus. 
                            Suspendisse vitae sodales leo. Proin hendrerit aliquam interdum. Maecenas tellus ante, ultrices id 
                            justo id, venenatis hendrerit orci. Orci varius natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Praesent aliquam condimentum ligula eget ullamcorper.
                        </p>    
                        <div className='about__display'>
                            <img className='about__display__image' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                            Suspendisse gravida magna posuere purus laoreet, et elementum velit placerat. Fusce at convallis erat. 
                            Curabitur placerat eros eu interdum lacinia. Nulla facilisi. Duis pretium tristique porta. Donec 
                            vehicula est a massa interdum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris malesuada lacus mauris, eu ultrices neque egestas eu. Class aptent taciti sociosqu ad litora 
                            torquent per conubia nostra, per inceptos himenaeos. Morbi elementum enim vitae purus pulvinar tincidunt. 
                            Aenean id viverra leo, non vehicula odio. Vestibulum volutpat a nulla at mattis. Nam cursus semper sapien, 
                            eu consequat lacus iaculis vel.
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet out awesome team!</h2>
                </div>
                {getAllBrokers()}
            </section>
        </main>
    );
};

export default About;