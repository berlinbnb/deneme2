import * as Popover from '@radix-ui/react-popover'
import { IconX } from '@tabler/icons-react'
import { ComponentFactory } from '../../../types'
import { composeButton } from '../../Forms'
import { composeShowableContent } from '../../Utility'

const composePopoverArrow = ({ styled }: ComponentFactory) => styled(Popover.Arrow, { fill: 'white' })
const composePopoverClose = ({ styled }: ComponentFactory) =>
  styled(Popover.Close, { all: 'unset', top: '0.25rem', right: '0.25rem', position: 'absolute' })

export interface PopoverProps {
  children: React.ReactNode
  content: React.ReactNode
}

const composePopover = ({ styled, css }: ComponentFactory) => {
  const PopoverContent = composeShowableContent({ styled, baseComponent: Popover.Content })
  const PopoverArrow = composePopoverArrow({ styled })
  const PopoverClose = composePopoverClose({ styled })
  const Button = composeButton({ styled, css })
  return ({ children, content }: PopoverProps) => (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <PopoverContent>
          <PopoverClose>
            <Button scheme="ghost" css={{ width: '1.5rem', height: '1.5rem', padding: '0.25rem' }}>
              <IconX />
            </Button>
          </PopoverClose>
          <PopoverArrow />
          {content}
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default composePopover
