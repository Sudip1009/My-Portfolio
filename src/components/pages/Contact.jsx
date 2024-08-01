import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d442433-0dbb-4390-a9a8-4464772fefbe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div name='contact' className='w-full p-10  flex flex-col justify-center items-center'>
        <form onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-zinc-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - chakraborty.sudip1009@gmail.com</p>
            </div>
            <input className='bg-transparent outline-none border-b-2 border-gray-600 p-2' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-transparent outline-none border-b-2 border-gray-600' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-transparent outline-none border-b-2 border-gray-600 p-2 resize-none' name="message" placeholder='Message' required></textarea>
            <button className='text-white rounded-lg border-2 px-6 py-3 my-2 shadow-md shadow-blue-500/50 
       relative flex items-center hover:delay-300 before:absolute before:inset-0 before:bg-blue-500/50
       before:scale-x-0 before:origin-right before:transition-transform 
       hover:before:scale-x-100 hover:before:origin-left mt-4 mx-auto'>Let's Collaborate</button>
        </form>
        {result ? <h1 className='bg-green-900 text-white p-2 rounded-lg'>{result}</h1> : null}
        
    </div>
  )
}

export default Contact