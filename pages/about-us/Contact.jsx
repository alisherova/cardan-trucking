import Image from 'next/image'
import React from 'react'
import Button from '../../components/button'
import Truck1 from '../../public/kardan/about-us/Image.png'
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  
  const handleSubmit = (e) => {
        e.preventDefault();
        const chatIds = [10435088226, 631087023, 530727939, 1152682790, 1354711429, 2063920274];
        let text = `From user form: \n\n👨: ${e.target[0].value} ${e.target[1].value}\n📥: ${e.target[2].value}\n📞: ${e.target[4].value}\n🖇: ${e.target[5].value}`;
      //  axios.get(`https://api.telegram.org/bot5600293539:AAEvQ9TD9stnTbP6-bBy64V6c8zjUk-6Xxo/sendMessage?chat_id=${chatIds[0]}&text=${encodeURIComponent(text)}`)
        axios.get(`https://api.telegram.org/bot5600293539:AAEvQ9TD9stnTbP6-bBy64V6c8zjUk-6Xxo/sendMessage?chat_id=${chatIds[4]}&text=${encodeURIComponent(text)}`)
        axios.get(`https://api.telegram.org/bot5600293539:AAEvQ9TD9stnTbP6-bBy64V6c8zjUk-6Xxo/sendMessage?chat_id=${chatIds[5]}&text=${encodeURIComponent(text)}`)
        axios.get(`https://api.telegram.org/bot5600293539:AAEvQ9TD9stnTbP6-bBy64V6c8zjUk-6Xxo/sendMessage?chat_id=${chatIds[3]}&text=${encodeURIComponent(text)}`).then(res => {
            toast("Your information sent!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                toast("We will contact you very soon!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, 1000)
        })

        // try {
           //  console.log("before")
           // generateETag('event', 'conversion', {'send_to': 'AW-10933023663/ntddCLDIsNwDEK_not0o'});
           // console.log("after")
            // navigate to thank you page
        // } catch (event) {
        //    console.log("generateEtag", event)
        // }
       // router.push("/final-page");
    }
  
  return (
    <div className={'container'}>
      <div className={"grid grid-cols-1 md:grid-cols-2 my-10 md:my-28"}>
        <div className="md:w-3/4 mx-auto md:m-0">
          <p className={'text-3xl md:text-4xl font-semibold mt:3  md:mt-7 mb-4'}>Get in touch</p>
          <p classname={'text-gray-300 mt-5'}>Our friendly team would love to hear from you</p>
          <form className='mt-12' onSubmit={handleSubmit}>
            <div className={"block md:flex gap-5"}>
              <div className={"mb-4"}>
                <label htmlFor="firstName">First name</label>
                <input type="text" id={'firstName'} required placeholder='First name' className={'bg-white mt-2 border text-black p-3 rounded w-full'} />
              </div>
              <div className={"mb-4"}>
                <label htmlFor="lastName">Last name</label>
                <input type="text" id={'lastName'} required placeholder='Last name' className={'bg-white mt-2 border text-black p-3 rounded w-full'} />
              </div>
            </div>
            <div className={"mb-4"}>
              <label htmlFor="email">Email</label>
              <input type="email" id={'email'} required placeholder='you@company.com' className={'bg-white mt-2 border text-black p-3 rounded w-full'} />
            </div>
            <div className={'mb-4'}>
              <label htmlFor="phone-number">Phone Number</label>
              <div className="flex">
                <select name="phonecode" id="phonecode" className='bg-white mt-2 border border-r-0 text-black p-1 rounded w-16 rounded-r-none'>
                  <option value="1">US</option>
                  <option value="2">Uz</option>
                  <option value="3">Ru</option>
                  <option value="4">UK</option>
                </select>
                <input type="text" id={'phone-number'} placeholder='+1 (555) 000-0000' className={'bg-white mt-2 border text-black p-3 rounded rounded-l-none w-full'} />
              </div>
            </div>
            <div className={"mb-4"}>
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="message" cols="30" rows="5" className='bg-white border text-black rounded w-full mt-2 p-3'></textarea>
            </div>
            <div className={"mb-4"}>
              <input type="checkbox"  name="check" id="check" className='bg-white   rounded-full checked:bg-blue-500 default:bg-white mr-3' />
              <label htmlFor="check">You agree to our privacy policy.</label>
            </div>
            <div className="mb-4">
              <Button type={"submit"} classes={'bg-blue-600 w-full'} text={'Send message'} />
            </div>
          </form>
        </div>
        <div className="for-image hidden md:block m-auto md:my-auto">
          <Image src={Truck1} className={'w-full'} alt={'truck'} />
        </div>

      </div>
    </div>
  )
}

export default Contact;
