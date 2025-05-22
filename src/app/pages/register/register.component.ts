import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  resultado!: string;
  miClase: string="msg1"
  usuario: any;
  usu={
    nombre:'',
    email:'',
    password:''
  }

  constructor(private registroUsuario:ClientesService){
    this.formularioValidacion.get('repassword')?.setValidators([this.passwordValidator()]);  
  }

  //alta
  alta() {
    if (this.formularioValidacion.valid) {
      const usuario = {
        nombre: this.formularioValidacion.get('nombre')?.value,
        email: this.formularioValidacion.get('correo')?.value,
        password: this.formularioValidacion.get('password')?.value,
      }; 
      console.log('Datos enviados:', usuario); // Verifica los datos antes de enviarlos
      this.registroUsuario.guardarusuario(usuario).subscribe(
        (data: any) => {
          console.log('Respuesta del servidor:', data); // Verifica la respuesta del servidor
          this.resultado = data.success ? 'Usuario registrado con éxito' : data.message || 'Error al registrar usuario';
        },
        (error) => {
          console.error('Error en la solicitud:', error); // Captura errores de la solicitud
          this.resultado = 'No se pudo conectar con el servidor. Por favor, inténtelo más tarde.';
        }
      );
    } else {
      this.resultado = 'Formulario inválido';
    }
  }

  formularioValidacion = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required]),
  });

  submit(){
    if(this.formularioValidacion.valid)
      this.resultado="Valido furmulario"
      else
      this.resultado="No pasa"
  }

  passwordValidator():ValidatorFn{
    return (control: AbstractControl):{[kay:string]:any}| null =>{
      const password= this.formularioValidacion.get('password')?.value;
      const repassword= control.value;

      if(password == repassword){
        return null;
      }else{
        return{'passwordMismatched': true}
      }
    }
  }
}
