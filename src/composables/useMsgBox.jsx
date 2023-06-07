/**
 * https://mdbootstrap.com/docs/angular/css/colors/
 * https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.messagebox.show
 */
import {ref} from 'vue'

export default function useMsgBox(layerService) {
  const Buttons = {
    OKCancel: 1,
    AbortRetryIgnore: 2,
    YesNoCancel: 3,
    YesNo: 4,
    RetryCancel: 5,
    OK: 6,
  };

  const Icons = {
    Information: 1,
    Warning: 2,
    Error: 3,
    Question: 4,
    Success: 5,
    None: 6,
  };

  const Results = {
    abort: 'abort',
    cancel: 'cancel',
    ignore: 'ignore',
    no: 'no',
    ok: 'ok',
    retry: 'retry',
    yes: 'yes'
  }

  const msgData = ref({
    show: false,
    btn: Buttons.OKCancel,
    icon: Icons.None,
    title: '',
    content: '',
    resultHandlerFn: result => console.log(result)
  });

  function show(title, content, btn, icon) {
    return new Promise(resolve => {
      msgData.value = {
        title,
        content,
        btn: btn || Buttons.YesNo,
        icon: icon || Icons.Question,
        zIndex: layerService.getNextZIndex(),
        resultHandlerFn: result => {
          msgData.value.show = false
          resolve(result)
        },
        show: true
      }
    })
  }

  const renderBtn = (uiLabel, onClick, isDefaultBtn) => {
    const attrs = {
      primary: isDefaultBtn,
      secondary: !isDefaultBtn
    }
    const style = {
      minWidth: '100px',
      textTransform: 'capitalize'
    }
    return (
        <t-btn
            {...attrs}
            onClick={onClick}
            class="px-2 py-1 clickable ta-c" style={style}>
          {uiLabel}
        </t-btn>
    )
  }
  const btnRenders = {
    [Buttons.OK]: (on) => renderBtn('ok', () => on(Results.ok)),
    [Buttons.OKCancel]: (on) => <>
      {renderBtn('cancel', () => on(Results.cancel))}
      {renderBtn('ok', () => on(Results.ok), true)}
    </>,
    [Buttons.AbortRetryIgnore]: (on) => <>
      {renderBtn('abort', () => on(Results.abort))}
      {renderBtn('retry', () => on(Results.retry))}
      {renderBtn('ignore', () => on(Results.ignore))}
    </>,
    [Buttons.YesNoCancel]: (on) => <>
      {renderBtn('cancel', () => on(Results.cancel))}
      {renderBtn('no', () => on(Results.no))}
      {renderBtn('yes', () => on(Results.yes), true)}
    </>,
    [Buttons.YesNo]: (on) => <>
      {renderBtn('no', () => on(Results.no))}
      {renderBtn('yes', () => on(Results.yes), true)}
    </>,
    [Buttons.RetryCancel]: (on) => <>
      {renderBtn('cancel', () => on(Results.cancel))}
      {renderBtn('retry', () => on(Results.retry), true)}
    </>,
  };
  const iconRenders = {
    [Icons.None]: () => null,
    [Icons.Success]: () => <t-icon>fas fa-check-circle:#43a047</t-icon>,
    [Icons.Information]: () => <t-icon>fas fa-info-circle:#039be5</t-icon>,
    [Icons.Warning]: () => <t-icon>fas fa-exclamation-triangle:#d32f2f</t-icon>,
    [Icons.Error]: () => <t-icon>fas fa-times-circle:#d32f2f</t-icon>,
    [Icons.Question]: () => <t-icon>fas fa-question-circle:#757575</t-icon>,
  };

  const render = () => {
    if (!msgData.value.show) {
      return
    }

    return <t-overlay zIndex={msgData.value.zIndex}>
      <t-base-dialog
          title={msgData.value.title}
          showCloseIcon={false}
          style={{width: '70%', maxWidth: '500px'}}
          v-slots={{
            body: () => <div class="fr jc-fs fg-12px min-h-100px">
              {iconRenders[msgData.value.icon]()}
              {typeof (msgData.value.content) === 'function' ? msgData.value.content() : msgData.value.content}
            </div>,
            footer: () => btnRenders[msgData.value.btn](msgData.value.resultHandlerFn)
          }}/>
    </t-overlay>
  }

  return {
    Buttons,
    Icons,
    Results,
    show,
    render
  }
}
