import React from 'react';

const SHOP_TYPES = ['Fast Food Shop', 'Western Restaurant', 'Chinese Restaurant', 'Central Food Production Plant', 'Reheat Centre', 'Siu Mei Food Factory', 'Alteration & Renovation of Factory', 'Canteens of establishments', 'Public Organisation', 'Commercial Block Planning'];

const About = () => {
    return ( 
        <div className='w-100 min-vh-100'>
            <section className='w-100 min-vh-100 flex items-center pa4'>
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4">
                        ABOUT US
                    </h1>
                    <span className='f4'>"We come from one of the biggest</span>
                    <span className='f4'>F&B companies in Hong Kong"</span>
                </div>
                
            </section>
            <section className='w-100'>
                <div class="pa3 pa4-ns">
                    <p class="tc f4 lh-copy measure">
                        Peter Ip & Associates Limited is a multi-discipline consultancy company providing full professional services for
                        the F&B industry. Established by Mr. Peter Ip, the ex-senior catering expert from Café de Coral Holdings
                        Limited, we serve our clients who would like to setup and operate their F&B shops including restaurants,
                        fast-food shops, factories, hotels, etc.
                    </p>
                </div>
            </section>
            <section className='w-100'>
                <div className="pa2 pa3-ns">
                    <h1 className='f3 tc lh-copy'>We are well-experienced in dealing with various types of F&B shops...</h1>
                </div>
                <div className="ph3 ph4-ns">
                    <ul className="list pl0 measure center">
                        {
                            SHOP_TYPES &&
                            SHOP_TYPES.map(type => (
                                <li key={type} className="ttc lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{type}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='w-100'>
                <div className="pa2 pa3-ns">
                    <h1 className='f3 tc lh-copy'>Organization Structure</h1>
                </div>
            </section>
        </div>
     );
}
 
export default About;