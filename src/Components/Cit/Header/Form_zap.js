import "./Form_zap.css"
import info from "../../../assets/info.svg"
import Dsvg from "../../../assets/down_arrow.svg"
export default function Header() {
    return (
        <div>
            <div class='form'>
                <div class='info_block'><img src={info} /></div>
                <div class='zap'><div>
                    <div class='info1'>
                        <div class='i_name'>Должность</div>
                        <div class='line'>
                            <div class='form_text1'>Младший аналитик</div>
                            <div class='img_form'><img src={Dsvg} /></div>
                        </div>
                    </div>
                    <div class='info1'>
                        <div class='i_name'>Роль</div>
                        <div class='line'>
                            <div class='form_text2'>Ввод</div>
                            <div class='img_form'><img src={Dsvg} /></div>
                        </div>
                    </div>
                    <div class='info1'>
                        <div class='i_name'>Стрим</div>
                        <div class='line'>
                            <div class='form_text1'>Java</div>
                            <div class='img_form'><img src={Dsvg} /></div>
                        </div>
                    </div></div>

                    <div class='form2'>
                        <div class="for_flex">
                            <div class='info1_1'>
                                <div class='i_name'>Трайб</div>
                                <div class='line_block'>
                                    <div class='form_text2'>ИТ</div>
                                    <div class='img_form'><img src={Dsvg} /></div>
                                </div>
                            </div>
                            <div class='info1_1'>
                                <div class='i_name'>Продукт</div>
                                <div class='line_block'>
                                    <div class='form_text2'>APP</div>
                                    <div class='img_form'><img src={Dsvg} /></div>
                                </div>
                            </div>
                            <div class='info1_1'>
                                <div class='i_name'>Capex/Opex</div>
                                <div class='line_block'>
                                    <div class='form_text2'>Opex</div>
                                    <div class='img_form'><img src={Dsvg} /></div>
                                </div>
                            </div>
                        </div>

                        <div class="for_flex">
                        <div class='info1_1'>
                                <div class='i_name'>Ставка, FTE </div>
                                <div class='line_block'>
                                    <div></div>
                                    <div class='form_text2'>1</div>
                                </div>

                            </div>
                            <div class='info1_1'>
                                <div class='i_name'>Команда</div>
                                <div class='line_block'>
                                    <div class='form_text2'>ИТ</div>
                                    <div class='img_form'><img src={Dsvg} /></div>
                                </div>
                            </div>

                            <div class="ellipse">
                    <div class="ellipse_text">Дедлайн закрытия вакансии</div>
                    <div class='ellipse_form'>08.11.2021</div>
                     <div></div></div>
                        </div>

                    </div>

                    <div class='form3'>
                        <div class='info1'>
                            <div class='i_name'>Тип найма</div>
                            <div class='line_block'>
                                <div class='form_text2'>Штат/Аутстафинг</div>
                                <div class='img_form'><img src={Dsvg} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}