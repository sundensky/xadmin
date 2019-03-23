import React from 'react'
import { Form, Input, Col } from 'antd'

const FieldGroup = ({ label, meta, input, field, children }) => {
  const attrs = field.attrs || {}
  const error = meta.touched && meta.error
  const extra = field.description || field.help
  const size = (field.option && field.option.groupSize) || attrs.groupSize || { 
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  }

  const groupProps = { extra, ...size, required: field.required }

  if (error) {
    groupProps['validateStatus'] = 'error'
    groupProps['hasFeedback'] = true
    groupProps['help'] = error
  }


  const controlComponent = children ? children : (<Input {...input} {...attrs} />)
  return (
    <Form.Item label={label} {...groupProps}>
      {controlComponent}
    </Form.Item>
  )
}

const FieldTableGroup = ({ label, meta, input, field, nav, children }) => {
  const attrs = field.attrs || {}
  const error = meta.touched && meta.error
  const extra = field.description || field.help
  const size = (field.option && field.option.groupSize) || attrs.groupSize || { 
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  }

  const groupProps = { extra, ...size, required: field.required }

  if (error) {
    groupProps['validateStatus'] = 'error'
    groupProps['hasFeedback'] = true
    groupProps['help'] = error
  }


  const controlComponent = children ? children : (<Input {...input} {...attrs} />)
  return (
    <>
      <Form.Item label={label} {...groupProps}>
        {nav}
      </Form.Item>
      {controlComponent}
    </>
  )
}

const InlineGroup = ({ label, meta, input, field, children }) => {
  const attrs = field.attrs || {}
  const error = meta.touched && meta.error
  const extra = field.description || field.help
  const groupProps = { extra, required: field.required }

  if (error) {
    groupProps['validateStatus'] = 'error'
    groupProps['hasFeedback'] = true
    groupProps['help'] = error
  }

  const controlComponent = children ? children : (<Input {...input} {...attrs} />)
  return (
    <Form.Item {...groupProps}>
      {React.cloneElement(controlComponent, { inline: true } )}
    </Form.Item>
  )
}

const SimpleGroup = ({ label, meta, input, field, children }) => {
  const attrs = field.attrs || {}
  const error = meta.touched && meta.error
  const extra = field.description || field.help
  const groupProps = { extra, required: field.required }

  if (error) {
    groupProps['validateStatus'] = 'error'
    groupProps['hasFeedback'] = true
    groupProps['help'] = error
  }

  const controlComponent = children ? children : (<Input {...input} {...attrs} />)
  return (
    <Form.Item label={label} {...groupProps}>
      {controlComponent}
    </Form.Item>
  )
}

const ColGroup = ({ label, meta, input, field, children }) => {
  const attrs = field.attrs || {}
  const error = meta.touched && meta.error
  const extra = field.description || field.help
  const size = (field.option && field.option.groupSize) || attrs.groupSize || { 
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 }
    }
  }

  const groupProps = { extra, ...size, required: field.required }

  if (error) {
    groupProps['validateStatus'] = 'error'
    groupProps['hasFeedback'] = true
    groupProps['help'] = error
  }

  const controlComponent = children ? children : (<Input {...input} {...attrs} />)
  return (
    <Col span={6}>
      <Form.Item label={label} {...groupProps}>
        {controlComponent}
      </Form.Item>
    </Col>
  )
}

export {
  FieldGroup, FieldTableGroup, InlineGroup, ColGroup, SimpleGroup
}