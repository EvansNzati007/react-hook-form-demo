import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange', //utile pour la validation des champs avant la soumission
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-md shadow-lg">
        <h1 className="flex items-center justify-center mb-4 text-2xl lg:text-3xl font-bold text-spot-green">
          Renseignez vos Informations svp !
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <input
              className="w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
              placeholder="Nom"
              type="text"
              {...register('nom', { required: 'Ce champ est requis' })}
            />
            {errors.nom && <p className="text-red-500 text-sm">{errors.nom.message}</p>}
          </div>
          <div>
            <input
              className="w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
              placeholder="Prénom"
              type="text"
              {...register('prenom', { required: 'Ce champ est requis' })}
            />
            {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            className="w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
            type="date"
            {...register('date', { required: 'Ce champ est requis' })}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            className="w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
            placeholder="exemple@gmail.com"
            type="email"
            {...register('email', {
              required: 'Ce champ est requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email invalide',
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-12 gap-4 mb-4">
          <input
            className="col-span-4 w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
            placeholder="Adresse"
            {...register('adresse', { required: 'Ce champ est requis' })}
          />
          <input
            className="col-span-4 w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
            placeholder="Numéro"
            type="text"
            {...register('numero', { required: 'Ce champ est requis' })}
          />
          <input
            className="col-span-4 w-full p-2 border border-black rounded-md outline-none focus:border-spot-green"
            placeholder="Code postal"
            type="number"
            {...register('code_postal', { required: 'Ce champ est requis' })}
          />
        </div>

        <button
          type="submit"
          disabled={!isValid} 
          className="w-full flex items-center justify-center space-x-4 p-2 bg-spot-green text-white font-bold rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Envoyer
          <svg
            className="mx-2"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.40995 21.7499C4.28995 21.7499 3.57995 21.3699 3.12995 20.9199C2.24995 20.0399 1.62995 18.1699 3.60995 14.1999L4.47995 12.4699C4.58995 12.2399 4.58995 11.7599 4.47995 11.5299L3.60995 9.7999C1.61995 5.8299 2.24995 3.9499 3.12995 3.0799C3.99995 2.1999 5.87995 1.5699 9.83995 3.5599L18.3999 7.8399C20.5299 8.8999 21.6999 10.3799 21.6999 11.9999C21.6999 13.6199 20.5299 15.0999 18.4099 16.1599L9.84995 20.4399C7.90995 21.4099 6.46995 21.7499 5.40995 21.7499ZM5.40995 3.7499C4.86995 3.7499 4.44995 3.8799 4.18995 4.1399C3.45995 4.8599 3.74995 6.7299 4.94995 9.1199L5.81995 10.8599C6.13995 11.5099 6.13995 12.4899 5.81995 13.1399L4.94995 14.8699C3.74995 17.2699 3.45995 19.1299 4.18995 19.8499C4.90995 20.5799 6.77995 20.2899 9.17995 19.0899L17.7399 14.8099C19.3099 14.0299 20.1999 12.9999 20.1999 11.9899C20.1999 10.9799 19.2999 9.9499 17.7299 9.1699L9.16995 4.8999C7.64995 4.1399 6.33995 3.7499 5.40995 3.7499Z"
              fill="#292D32"
            />
            <path
              d="M10.8395 12.75H5.43945C5.02945 12.75 4.68945 12.41 4.68945 12C4.68945 11.59 5.02945 11.25 5.43945 11.25H10.8395C11.2495 11.25 11.5895 11.59 11.5895 12C11.5895 12.41 11.2495 12.75 10.8395 12.75Z"
              fill="#292D32"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}