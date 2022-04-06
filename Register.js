import "./Register.css"
const Register = ()=>{
return(  
     <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="number" placeholder="Enter your number" required />
          </div>
          <div class="input-box">
            <span class="details">College</span>
            <input type="text" placeholder="Enter your college name" required />
          </div>
          <div class="input-box">
            <span class="details">Department</span>
            <input type="text" placeholder="Enter your Dep name" required />
          </div>
          <div class="input-box">
            <span class="details">Year</span>
            <input type="text" placeholder="Pursuing Year" required />
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <input type="radio" name="gender" id="dot-4" />
          <input type="radio" name="gender" id="dot-5" />
          <span class="gender-title">Event</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Technical</span>
          </label>
          <br />
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Non technical</span>
          </label>
          <br />
          
              
              
          </div>
          <br />
          

          <div class="payment">
            <p class="payment1">Payment :</p><p class="ph">ph:9789784979-(Aravind)<br/>ph:6379115344-(Surya)</p>
      <p class="upi">UPI ID :</p>
      <p> Harish@123icici</p>
            <br />
            <p>Further Details : <button class="b1" disabled>ph:9047067413-(Chandru)<br />ph:6379115344-(Surya)</button></p>
        </div>  
        </div>
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>
);
}
export default Register;