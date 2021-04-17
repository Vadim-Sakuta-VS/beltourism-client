import React, {useContext} from 'react';
import './Comments.scss';
import {AuthContext} from '../../App';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {POPUPS_FORMS, VALIDATION_MES} from '../../constants/constants';
import {sortArrayDecreaseByProp} from '../../utils/utils';
import {Form, Formik} from 'formik';
import {sendComment} from '../../redux/serviceDetails/effects';
import {TextareaField} from '../Forms/Fields/TextareaField';
import {ButtonSubmit} from '../Forms/ButtonSubmit/ButtonSubmit';
import {Comment} from './Comment';
import {Rating} from '../Rating/Rating';

export const Comments = ({setPopupInfo, serviceId, comments}) => {
    const {isUserAuth} = useContext(AuthContext);
    const dispatch = useDispatch();

    const commentsInitialValues = {
        description: '',
        rating: 0,
        serviceId,
        commentDate: null,
        userId: 0
    };

    let validationSchema = Yup.object().shape({
        description: Yup.string().required(VALIDATION_MES.REQUIRED),
    })

    const sortedComments = comments && sortArrayDecreaseByProp(comments, 'id');

    return (
        <div className="comments">
            <h2>Комментарии</h2>
            <Formik
                initialValues={commentsInitialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                    if (!isUserAuth) {
                        setPopupInfo({activeForm: POPUPS_FORMS.LOGIN, fromFormClosed: ''})
                        setSubmitting(false);
                        return;
                    }
                    values.commentDate = new Date();

                    let result = await dispatch(sendComment(values));

                    if (result) {
                        setSubmitting(false);
                        resetForm();
                    }
                }}
            >
                {
                    ({isValid, isSubmitting, setFieldValue, values}) => {

                        const onRatingClick = (value) => {
                            values.rating === value
                                ? setFieldValue('rating', 0)
                                : setFieldValue('rating', value);
                        }

                        return (
                            <Form className="comment__form">
                                <div className="comment__form-rating">
                                    <Rating rating={values.rating} onClick={onRatingClick} countStars={5}/>
                                </div>
                                <TextareaField
                                    name="description"
                                    rows={5}
                                    placeholder="Ваш комментарий..."
                                    style={{fontSize: '1rem', marginTop: '1%'}}
                                    maxLength={400}
                                    styleError={{position: 'static'}}
                                />
                                <ButtonSubmit
                                    value="Отправить"
                                    isSubmitting={isSubmitting}
                                    isValid={isValid}
                                    styleWrap={{padding: 0, marginTop: '1%'}}
                                    styleBtn={{height: '100%'}}
                                />
                            </Form>
                        )
                    }
                }
            </Formik>
            {sortedComments && <div className="comments-items">
                {sortedComments.map(c => (
                    <Comment
                        key={c.id}
                        name="Имя"
                        surname="Фамилия"
                        rating={c.rating}
                        commentDate={new Date(c.commentDate).toLocaleDateString()}
                        description={c.description}
                    />
                ))}
            </div>}
        </div>
    )
}