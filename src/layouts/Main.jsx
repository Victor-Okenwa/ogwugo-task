import { deliveryMan1, deliveryMan2, food1, food2, grocery1, grocery3, money, phone, phone2 } from '../assets'
import Button from '../components/Button'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlateWheat, faStore, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Slider from '../components/Slider'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'

const Main = () => {
    return (
        <main>
            <header>
                <section>
                    <div className="head-info">
                        <h1>We <span>deliver</span> like a flash</h1>
                        <div className="text">
                            <p>Fast reliable delivery at your doorstep.
                                <br /> No time wasted just convinence served
                            </p>
                        </div>

                        <div className="button">
                            <Button classes={'order-btn'} text={'order food'} />
                        </div>

                    </div>

                    <div className="images">
                        <img className='first' src={deliveryMan1} alt="" />
                        <img className='last' src={grocery1} alt="" />
                        {/* <img src={grocery1} alt="" /> */}
                    </div>


                </section>
            </header>

            <div className="join">
                <section>
                    <div className="section-heading">
                        <h2>Join our growing network</h2>
                    </div>
                    <div className="section-body">
                        <div className="cards">
                            <Card>
                                <div className="card-icon">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>
                                <div className="card-text">
                                    <b>2.5k</b>
                                    <p>Reviews</p>
                                </div>
                            </Card>

                            <Card>
                                <div className="card-icon">
                                    <FontAwesomeIcon icon={faStore} />
                                </div>
                                <div className="card-text">
                                    <b>100+</b>
                                    <p>Restaurants</p>
                                </div>
                            </Card>

                            <Card>
                                <div className="card-icon">
                                    <FontAwesomeIcon icon={faPlateWheat} />
                                </div>
                                <div className="card-text">
                                    <b>200+</b>
                                    <p>Food items</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>

            <div className="relax">
                <section>
                    <div className="section-heading">
                        <h2>Relax, we will deliver it in minutes</h2>
                    </div>
                    <div className="section-body">
                        <div className="first">
                            <div className="text">
                                <div>
                                    <h3>Order your food</h3>
                                    <p>Select your prefered delicacies from your favorite restaurants</p>
                                </div>
                                <div>
                                    <h3>Deliver food to customers</h3>
                                    <p>Lets showcase your delicacies to our customers. We help you deliver your meals to customers at affordable rates</p>
                                </div>
                            </div>
                            <div className="image"><img src={phone} alt="" /></div>
                        </div>
                        <div className="last">
                            <div className="image"><img src={deliveryMan2} alt="" /></div>
                            <div className="text">
                                <div>
                                    <h3>Pickup & delivery</h3>
                                    <p>Select your prefered delicacies from your favorite restaurants</p>
                                </div>
                                <div>
                                    <h3>Move anything with us</h3>
                                    <p>Lets showcase your delicacies to our customers. We help you deliver your meals to customers at affordable rates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="restaurants">
                <section>
                    <div className="section-heading">
                        <h2>Popular restaurants & cafe</h2>
                        <p>Over 100+ restaurants use ogwugo to sell and deliver goods to their customers</p>
                    </div>
                    <div className="section-body">
                        <div className="cards">
                            <Card>
                                <div className="card-image">
                                    <img src={food1} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>Ntachi Osa</h3>
                                    <Button classes={'order-btn'} text={'order list'} />
                                </div>
                            </Card>
                            <Card>
                                <div className="card-image">
                                    <img src={grocery3} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>Balm of Gilead</h3>
                                    <div className="buttons">
                                        <Button classes={'order-btn'} text={'order list'} />
                                        <Button classes={'view-btn'} text={'view'} />
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="card-image">
                                    <img src={food2} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>Ntachi Osa</h3>
                                    <Button classes={'order-btn'} text={'order list'} />
                                </div>
                            </Card>
                            <Card>
                                <div className="card-image">
                                    <img src={food2} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>Ntachi Osa</h3>
                                    <Button classes={'order-btn'} text={'order list'} />
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>


            <div className="earn">
                <section>
                    <div className="section-body">
                        <div className="first">
                            <div className="text">
                                <div>
                                    <h3>Earn extra income fast</h3>
                                    <h4>Join us today as an o-pilot</h4>
                                </div>
                                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sit incidunt! Illum quod natus ab quo dolorem voluptatibus cupiditate sequi!</p></div>
                                <div>
                                    <Button classes={'join'} text={'Join Us'} />
                                </div>
                            </div>
                            <div className="image"><img src={money} alt="" /></div>
                        </div>
                        <div className="last">
                            <div className="image"><img src={phone2} alt="" /></div>
                            <div className="text">
                                <div>
                                    <h3>Youur favorite food delivered fast</h3>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sit incidunt! Illum quod natus ab quo dolorem voluptatibus cupiditate sequi!</p>
                                    <Button classes={'order-btn get-app'} text={'Get App'} />
                                </div>
                                <div className='stores'>
                                    <Button text={<FontAwesomeIcon icon={faGooglePlay} /> } />
                                    <Button text={<FontAwesomeIcon icon={faApple} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="slider">
                <section>
                    <Slider>
                        <Card >
                            <div className="card-header">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro unde et sint? Nihil, facilis voluptas? Natus vel velit officiis ex necessitatibus porro quisquam, maiores enim corrupti harum laudantium voluptatum error.</p>
                            </div>
                        </Card>
                        <Card >
                            <div className="card-header">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro unde et sint? Nihil, facilis voluptas? Natus vel velit officiis ex necessitatibus porro quisquam, maiores enim corrupti harum laudantium voluptatum error.</p>
                            </div>
                        </Card>
                        <Card >
                            <div className="card-header">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro unde et sint? Nihil, facilis voluptas? Natus vel velit officiis ex necessitatibus porro quisquam, maiores enim corrupti harum laudantium voluptatum error.</p>
                            </div>
                        </Card>
                        <Card >
                            <div className="card-header">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro unde et sint? Nihil, facilis voluptas? Natus vel velit officiis ex necessitatibus porro quisquam, maiores enim corrupti harum laudantium voluptatum error.</p>
                            </div>
                        </Card>
                        <Card >
                            <div className="card-header">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>

                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro unde et sint? Nihil, facilis voluptas? Natus vel velit officiis ex necessitatibus porro quisquam, maiores enim corrupti harum laudantium voluptatum error.</p>
                            </div>
                        </Card>
                    </Slider>
                </section>
            </div>
        </main>
    )
}

export default Main