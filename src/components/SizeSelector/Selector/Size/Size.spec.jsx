import { render, screen } from '@testing-library/react'
import Size from './Size'

describe('Size', () => {
	it('should show label text', () => {
		render(<Size size={{ label: '32' }} />)
		screen.debug()
	})
})
