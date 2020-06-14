import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ListingForm = (props) => {
    const [formData, setFormData] = useState({
        sale_type: 'For Sale',
        price: '$0+',
        berths: '0+',
        boat_type: 'Cruiser/Racer',
        bathrooms: '0+',
        length: 'Any',
        days_listed: 'Any',
        has_photos: '1+',
        open_boat: 'True',
        keywords: ''
    });

    const { sale_type, price, berths, boat_type, bathrooms, length, days_listed, has_photos, open_boat, keywords } = formData;

    const [loading, setLoading] = useState(false);


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post(`http://127.0.0.1:8000/api/listings/search`, { sale_type, price, berths, boat_type, bathrooms, length, days_listed, has_photos, open_boat, keywords }, config)
        .then(res => {
            setLoading(false);
            props.setListings(res.data);
            window.scrollTo(0, 0);
        })
        .catch(err => {
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

    return (
        <form className='listingform' onSubmit={e => onSubmit(e)}>
            <div className='row'>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='sale_type'>Sale or Lease</label>
                        <select className='listingform__select' name='sale_type' onChange={e => onChange(e)} value={sale_type}>
                            <option>For Sale</option>
                            <option>For Lease</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='length'>Length</label>
                        <select className='listingform__select' name='length' onChange={e => onChange(e)} value={length}>
                            <option>20+</option>
                            <option>30+</option>
                            <option>40+</option>
                            <option>50+</option>
                            <option>Any</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='price'>Minimum Price</label>
                        <select className='listingform__select' name='price' onChange={e => onChange(e)} value={price}>
                            <option>$0+</option>
                            <option>$10,000+</option>
                            <option>$60,000+</option>
                            <option>$100,000+</option>
                            <option>$150,000+</option>
                            <option>$350000+</option>
                            <option>$500000+</option>
                            <option>$1,000,000+</option>
                            <option>Any</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='days_listed'>Days Listed</label>
                        <select className='listingform__select' name='days_listed' onChange={e => onChange(e)} value={days_listed}>
                            <option>Any</option>
                            <option>1 or less</option>
                            <option>2 or less</option>
                            <option>5 or less</option>
                            <option>10 or less</option>
                            <option>20 or less</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='berths'>Berths</label>
                        <select className='listingform__select' name='berths' onChange={e => onChange(e)} value={berths}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='has_photos'>Has Photos</label>
                        <select className='listingform__select' name='has_photos' onChange={e => onChange(e)} value={has_photos}>
                            <option>1+</option>
                            <option>3+</option>
                            <option>5+</option>
                            <option>10+</option>
                            <option>15+</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='boat_type'>Boat Type</label>
                        <select className='listingform__select' name='boat_type' onChange={e => onChange(e)} value={boat_type}>
                            <option>Cruiser/Racer</option>
                            <option>Catamaran</option>
                            <option>Monohull</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='keywords'>Keywords</label>
                        <input className='listingform__input' name='keywords' type='text' onChange={e => onChange(e)} value={keywords} />
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='bathrooms'>Heads</label>
                        <select className='listingform__select' name='bathrooms' onChange={e => onChange(e)} value={bathrooms}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                    </div>
                    <div className='listingform__altsection'>
                        <label className='listingform__label' htmlFor='open_boat'>Open Boats</label>
                        <input className='listingform__checkbox' name='open_boat' type='checkbox' onChange={e => onChange(e)} value={open_boat} />
                    </div>
                </div>

                <div className='col-1-of-6'>
                    {loading ?
                        <div className='listingform__loader'>
                            <Loader
                                type="Oval"
                                color="#424242"
                                height={50}
                                width={50}
                            />
                        </div> : 
                        <button className='listingform__button listingform__button--primary'>Save</button>
                    }
                </div>
            </div>
        </form>
    );
};

ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default ListingForm;