import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chatbot } from '@/components/Chatbot';
import { supabase } from '@/integrations/supabase/client';
import { vi } from 'vitest';

vi.mock('@/integrations/supabase/client', async () => {
  const supabase = {
    functions: {
      invoke: vi.fn(() => Promise.resolve({ data: { success: true, reply: 'Hello there!' } })),
    },
  } as any;
  return { supabase };
});

describe('Chatbot', () => {
  it('sends message and receives reply', async () => {
    render(<Chatbot />);
    // Type into input and press Enter to submit
    const input = screen.getByPlaceholderText(/Ask anything/i);
    await userEvent.type(input, 'Hi{Enter}');
    // Await reply
    const reply = await screen.findByText(/Hello there!/i);
    expect(reply).toBeInTheDocument();

    // assert supabase functions.invoke was called
    expect((supabase as any).functions.invoke).toHaveBeenCalled();
  });
});
