import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Mobileotp() {

  return (
    <Card style={{margin:"auto", backgroundColor:"rgb(252 252 252)",display: "flex", height: "auto", width: "40vw",borderRadius: "10px",transition: "none",boxShadow:"none"}}>
    <div class="h-screen bg-blue-500 py-20 px-3">
    <div class="container mx-auto">
        <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
                <div class="bg-white h-64 py-3 rounded text-center">
                      <h1 class="text-2xl font-bold">OTP Verification</h1>
                      <div class="flex flex-col mt-4">
                          <span>Enter the OTP you received at</span>
                          <span class="font-bold">+91 ******876</span>
                      </div>
                      
                      <div id="otp" style={{display: 'flex', flexDirection: 'row'}}>
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                      </div>
                      
                      <div class="flex justify-center text-center mt-5">
                        
                          <Button class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></Button>
                        
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
</Card>
  );
}

export default Mobileotp;