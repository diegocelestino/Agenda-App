import React from 'react'
import Message from './Message'
import Input from './Input'
import Response from './Response'
import Service from './ServicePicker'
import Date from './DatePicker'
import TimePicker from './TimePicker'
import ConfirmButton from './ConfirmButton'
import Reminder from './Reminder'

const olaTudoBem = "Olá, tudo bem? Sou o assisistente digital do Biel"
const vouTeAjudar = "Vou te ajudar a agendar um horário, vamos lá?"
const informeONumero = "Informe o número do seu WhatsApp, para que possamos entrar em contato com você"
const qualServico = "Qual serviço você gostaria de agendar?"
const quandoVoceDeseja = "Quando você deseja realizar esse serviço?"
const qualOHorario = "Qual o horário que você deseja realizar esse serviço?"
const seuServico = "Seu Corte de Cabelo então ficou agendado para 09 de Agosto, terça-feira as 08:00"
const possoConfirmar = "Posso confirmar?"
const confirmado = "Confirmado então"
const cliqueNoBotão = "Clique no botão abaixo para enviar um lembrete ao Biel ou feche a página."




export default function MessageBox() {

  return (
    <div className='grid grid-cols-1 items-center gap-4 px-4 lg:px-12 pb-[120px]'>
    {/* PREPARAR AS MESSAGES QUE VAO ENTRAR EM CADA COMPONENTE MESSAGE
        PREPARAR O CONTEXT QUE OS INPUTS E PICKERS VAO GERENCIAR
        PREPARAR OS INPUTS, PICKERS E RESPONSES PARA LIDAR COM ESSES VALORES
        CRIAR OS FECTHS QUE VÃO LIDAR COM O BANCO
    */}

        <Message message={olaTudoBem}/>
        <Message message={vouTeAjudar}/>
        <Message message={informeONumero}/>
        <Input />
        <Response />


        <Message message={qualServico}/>
        <Service />
        <Response />


        <Message message={quandoVoceDeseja}/>
        <Date />
        <Response />

        <Message message={qualOHorario}/>
        <TimePicker />
        <Response />

        <Message message={seuServico}/>
        <Message message={possoConfirmar}/>
        <ConfirmButton />

        <Message message={confirmado}/>
        <Message message={cliqueNoBotão}/>
        <Reminder/>

    </div>
  )
}
