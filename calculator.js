

const $input = document.querySelector('input')
$input.value = 0

const $btns = document.querySelectorAll('button')

let operation
let firstNumberAfterOperation
let valueBeforeOperation

Array.from($btns).map($btn => {
  $btn.addEventListener('click', () => {
    const action = $btn.dataset.action
    const actionNumber = Number(action)

    if (!isNaN(actionNumber)) {
      if (Number($input.value) === 0) {
        $input.value = action
      }
      else if (firstNumberAfterOperation) {
        $input.value = action
        firstNumberAfterOperation = false
      }
      else {
        $input.value = action + $input.value
      }
    }

    else {
      const $current = document.querySelector('button.current')
      if ($current) $current.classList.remove('current')

      switch (action) {

        case 'ac':
          $input.value = '0';
          operation = firstNumberAfterOperatio = valueBeforeOperatio = null;
          break;

        default:
          if (operation) {
            $input.value = applyOperation(Number(valueBeforeOperation), Number($input.value), operation)
            if (action === '=') {
              operation = firstNumberAfterOperatio = valueBeforeOperatio = null;
              return
            }
          }

          operation = action
          firstNumberAfterOperation = true
          valueBeforeOperation = Number($input.value)

          $btn.classList.add('current')
          break
      }
    }
  })
})

function applyOperation(val1, val2, operation) {
  switch (operation) {
    case 'X':
      return val1 * val2
      break
    case '-':
      return val1 - val2
      break
    case '/':
      return val1 / val2
      break
    case '+':
      return val1 + val2
      break
  }
}
