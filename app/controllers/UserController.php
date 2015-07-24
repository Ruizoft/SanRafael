<?php
Class UserController extends BaseController {

 public function register ()
 {
     $errors         = array();  	// array to hold validation errors
     $data 			= array(); 		// array to pass back data

     if (empty($_POST['email']))
         $errors['email'] = 'Email is required.';

     if (empty($_POST['password']))
         $errors['password'] = 'Requiere una Contraseña.';

     if (empty($_POST['passCheck']))
         $errors['passCheck'] = 'Requiere validar su contraseña.';

     $email = Input::get('email');
     $password = Input::get('password');
     $passCheck = Input::get('passCheck');
     if ($password != $passCheck)
         $errors['passCheck1'] = 'Contraseñas no concuerdan';
     $repeat = DB::select('select * from users where email = ?', array($email));
     if ( ! empty($repeat))
         $errors['email1'] = 'Email ya esta en uso';

     if ( ! empty($errors)) {
         $data['success'] = false;
         $data['errors']  = $errors;
     } else {

         $user = New User;
         $user->email = $email;
         $user->password = $password;
         $user->save();


         $data['success'] = true;
         $data['message'] = 'Ya estas registrado, te hemos enviado un correo para validar tu cuenta';
     }

     echo json_encode($data);
 }

 public function login(){
	 /*$rules = array(
			'email'    => 'required|email',
			'password' => 'required|alphaNum|min:3' 
		);
		$validator = Validator::make(
		array(
		 'email' => Input::get('emaillog'),
        'password' => Input::get('passwordlog')
       )
		, $rules);
		if ($validator->fails()) {
			return Redirect::to('tuEmpresa')
				->withErrors($validator) // send back all errors to the login form
				->withInput(Input::except('password'));
	 
     } else {*/

			// create our user data for the authentication
			$userdata = array(
				'email' 	=> Input::get('emaillog'),
				'password' 	=> Input::get('passwordlog')
			);

			// attempt to do the login
			if (Auth::attempt($userdata)) {
				Session::put('Id', Auth::id());
                return Redirect::to('enterate');

			} else {	 	

				// validation not successful, send back to form	
				return Redirect::to('tuEmpresa');

			}

		//}
 }

public function logout()
	{
		Auth::logout(); 
		Session::flush();
		return Redirect::to('enterate'); 
	}


}