import { theme as defaultTheme } from '@chakra-ui/react';
function primary() {
  const disabled = {
    bg: 'gold.500-disabled',
  }

  const loading = {
    // @todo add loading state
  }

  return {
    bg: 'gold.500',
    color: 'black.500',
    _hover: {
      bg: 'gold.500-hover',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {
      bg: 'gold.500-active',
    },
    _focus: {}
  }
}

function secondary() {
  const disabled = {
    color: 'gold.500-disabled',
    bg: 'chocolate.600'
  }

  const loading = {
    // @todo add loading state
  }

  return {
    bg: 'chocolate.500',
    color: 'gold.500',
    _hover: {
      bg: 'chocolate.600',
      color: 'gold.500-hover',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {
      bg: 'chocolate.700',
      color: 'gold.500-active'
    },
    _focus: {}
  }
}

function tertiary() {
  const disabled = {
    bg: 'transparent',
    borderColor: 'gold.500-disabled',
    color: 'gold.500-disabled',
  }

  const loading = {
    // @todo add loading state
  }

  return {
    bg: 'transparent',
    color: 'gold.500',
    border: '1px solid',
    borderColor: 'gold.500',
    _hover: {
      borderColor: 'gold.500-hover',
      bg: 'chocolate.700',
      color: 'gold.500-hover',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {
      borderColor: 'gold.500-active',
      bg: 'chocolate.800',
      color: 'gold.500-active',
    },
    _focus: {}
  }
}

function text() {
  const disabled = {
    bg: 'none',
    borderColor: 'none',
    color: 'gold.500-disabled',
  }

  const loading = {
    // @todo add loading state
  }

  return {
    bg: 'none',
    borderColor: 'none',
    color: 'gold.500',
    _hover: {
      color: 'gold.500-hover',
      _disabled: {
        ...disabled,
        _loading: loading
      },
    },
    _disabled: {
      ...disabled,
      _loading: loading
    },
    _active: {
      color: 'gold.500-active',
    },
    _focus: {}
  }
}

export default {
  text,
  primary,
  secondary,
  tertiary
}