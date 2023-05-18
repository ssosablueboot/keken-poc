import { parseTexts } from "../../utils/parseTexts";
export function getDataParsed () {
    return parseTexts(getData());
}
function getData() {
    return [
        {
            /*
                HEADER (o no)
                - Items
            */
            data: "Los productos adquiridos por el CLIENTE podrán ser devueltos por las siguientes causas:",
            headerList2: true,
            withTitle: false,
            items: [
                "Si existe un error en el producto o faltante en el pedido. Para su devolución deberá conservar el empaque original en conjunto con el sello de garantía, el artículo no deberá presentar muestras de manipulación y el ticket de compra.",
                "Si el artículo presenta defectos de fabricación. Para su devolución deberá conservar el empaque original, el artículo no deberá presentar muestras de maltrato o alteración de temperatura y el ticket de compra."
            ]
        },
        {
            header: "CONDICIONES GENERALES DE DEVOLUCIÓN:",
            data: "Es importante que los clientes consideren que los productos a devolverse deben de cumplir con las siguientes características:",
            headerList2: true,
            withTitle: false,
            listStyle: "-moz-initial",
            items: [
                "Conservar su empaque original, etiquetas, adhesivos y sello de garantía.",
                "Conservar el ticket de compra.",
                "No contener signos de uso o manipulación del producto."
            ]
        },
        {
            header: "PLAZO:",
            data: "El cliente tendrá los próximos 60 minutos una vez entregado el producto para informar sobre alguna inconformidad sobre su pedido."
        },
        {
            header: "PROCESO:",
            headerList2: true,
            listStyle: "-moz-initial",
            items: [
                "El cliente deberá comunicarse al teléfono asignado a su zona de servicio a domicilio.",
                "El ejecutivo solicitará evidencias fotografías vía whatsapp al 9999302222 así como el ticket de compra.",
                "Evaluación de la situación por el Jefe de Distrito Servicio a Domicilio.",
                "Si necesita intervención del Jefe de Distrito de la zona donde se entregó el pedido se realizará.",
                "Se comunicará al cliente el resultado en los próximos 60 minutos al recibir la inconformidad."
            ]
        },
        {
            header: "NO APLICAN DEVOLUCIONES O CAMBIOS:",
            headerList2: true,
            items: [
                "Si el cliente se equivoco de producto al generar su pedido.",
                "No contar con algún requisito previamente mencionado.",
                "Si existe alguna manipulación del producto con terceros.",
            ]
        },
        {
            data: "En caso de no cumplirse con los pasos y requisitos previamente señalados, MAXICARNE podrá rechazar la solicitud de devolución."
        }
    ];
}